import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { Employee } from '../../../data/types';
import { cogPath, userPath } from '../../../data/initial-data';
import { selectEmployeesState } from '../../../store/employees.selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-graph-view',
  templateUrl: './graph-view.component.html',
  styleUrl: './graph-view.component.scss'
})
export class GraphViewComponent implements OnInit {

  data: Employee[] | any;
  treeData: any;
  constructor(private store: Store) {
    this.data = [];
    this.treeData = [];
  }

  ngOnInit(): void {
    this.store.select(selectEmployeesState).subscribe(
      (emps: Employee[] | any) => {
        this.data = emps;
        this.createBarChart(emps);
        console.log(this.treeData)
      }
    );
  }

  private createBarChart(data: Employee[]): void {
    const svg = d3.select("#graph-container").append("svg")
      .attr("width", '3000px')
      .attr("height", '3000px').append("g").attr("transform", "translate(-100,20)")

    const dataStructure = d3.stratify().id((d: any) => d.id).parentId((d: any) => d.managerId)(data);
    const treeStructure = d3.tree().size([1500, 550]);
    const information = treeStructure(dataStructure);
    this.treeData = information.descendants();
    const connections = svg.append("g").selectAll("path").data(information.links());
    connections.enter().append("path").attr("d", (d: any) => {
      return "M " + (d.source.x + 130) + "," + (d.source.y + 50) + " v 70 H" + (d.target.x + 100) + "V" + d.target.y;
    });
    const reactangles = svg.append("g").selectAll("rect").data(information.descendants());
    reactangles.enter().append('rect').attr("x", (d: any) => d.x - 10).attr("y", (d: any) => d.y - 20);
    const names = svg.append("g").selectAll("text").data(information.descendants());
    names.enter().append("text").text((d: any) => d.data.name).attr("x", (d: any) => d.x + 10).attr("y", (d: any) => d.y + 4)
    const phones = svg.append("g").selectAll("text").data(information.descendants());
    phones.enter().append("text").text((d: any) => `Phone: ${d.data.phone}`).attr("x", (d: any) => d.x + 45).attr("y", (d: any) => d.y + 75)
    const emails = svg.append("g").selectAll("text").data(information.descendants());
    emails.enter().append("text").text((d: any) => `Email: ${d.data.email}`).attr("x", (d: any) => d.x + 45).attr("y", (d: any) => d.y + 55)
    const designations = svg.append("g").selectAll("text").data(information.descendants());
    designations.enter().append("text").text((d: any) => d.data.designation).attr("x", (d: any) => d.x + 45).attr("y", (d: any) => d.y + 35)
    const userPics = svg.append("g").selectAll("g").data(information.descendants());
    userPics.enter().append('g').attr("transform", (d: any) => `translate(${d.x}, ${d.y + 30})`).append("path").attr("d", userPath);
  }
}
