import React from "react";

const IngredientTable = ({ allRecipes }) => {
    return (
        <div className="mt6 navy">
            <table className="table table-info table-striped navy">
                <thead>
                    <tr>
                        <th colSpan="3">{"Qty-Unit-Food"}</th>
                        <th>{"Calories(kcl)"}</th>
                        <th>{"Weight(g)"}</th>
                    </tr>
                </thead>
                <tbody>
                    {allRecipes.map((recipes, i) => {
                        return (
                            <tr key={i}>
                                <td colSpan="3">{recipes.ingerdient}</td>
                                {/* <td>{recipes.nutritions}</td>
                                <td>{recipes.nutritions}</td> */}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default IngredientTable;
