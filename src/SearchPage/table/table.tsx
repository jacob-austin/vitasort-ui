import React from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import errors from '../../assets/json/error-messages.json';
import { Supplement } from '../../common/types';

interface SupplementTableProps {
  supplements: Supplement[];
}

export default class Table extends React.Component<SupplementTableProps> {

  render() {
    const { supplements } = this.props;
    return this.SupplementTable({ supplements });
  }

  SupplementTable({ supplements }: SupplementTableProps) {
    return (
      <table className="supplement-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Cost</th>
            <th>Servings</th>
            <th>Cost per Serving</th>
            <th>Protein per serving(g)</th>
            <th>Cost per 100g Protein</th>
          </tr>
        </thead>
        <tbody>
          {supplements.map((supplement:any, index:number) => (
            <this.SupplementRow key={index} supplement={supplement} />
          ))}
        </tbody>
      </table>
    );
  }

  SupplementRow({ supplement }: { supplement: Supplement }) {
    const { supplement_name, cost, servings, protein_per_serving } = supplement;

    const costNumber = cost ? parseFloat(cost) : 0;
    const servingsNumber = servings ? parseFloat(servings) : 0;
    const proteinNumber = protein_per_serving ? parseFloat(protein_per_serving) : 0;

    const costPerServing = (costNumber / servingsNumber).toFixed(2);
    const costPer100gProtein = ((costNumber / (proteinNumber * servingsNumber) * 100).toFixed(2));

    return (
      <tr>
        <td>{supplement_name}</td>
        <td>${cost}</td>
        <td>{servings}</td>
        <td>${costPerServing}</td>
        <td>{protein_per_serving}g</td>
        <td>${costPer100gProtein}</td>
      </tr>
    );
  }
}