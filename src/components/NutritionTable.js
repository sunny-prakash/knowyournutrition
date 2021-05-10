import React from "react";

const NutritionTable = () => {
    return (
        <div className="navy nutrition_box bodoni fw6">
            <h1 className="mt-0 f1 underline">Nutrition Facts</h1>
            <h3>Amount Per Serving</h3>
            <h1 className="d-flex justify-content-between">
                <span>Calories</span>
                <span>1132</span>
            </h1>
            <table className="table table-info table-striped navy">
                <thead>
                    <tr>
                        <th>Qty</th>
                        <th>Unit</th>
                        <th>Food</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3">{"*Percent Daily Values are based on a 2000 calorie diet"}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default NutritionTable;
