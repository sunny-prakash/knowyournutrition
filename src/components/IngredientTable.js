import React from "react";

const IngredientTable = ({ allRecipes }) => {
    return (
        <div className="mt6 navy">
            {/* {console.log("inside Ninjaaaa")} */}
            <table className="table table-info table-striped navy">
                <thead>
                    <tr>
                        <th colSpan="3">{"Qty-Unit-Food"}</th>
                        <th>{"Calories(kcl)"}</th>
                        <th>{"Weight(g)"}</th>
                    </tr>
                </thead>
                <tbody>
                    {allRecipes.map((recipes) => {
                        return (
                            <tr key={recipes.id}>
                                <td colSpan="3">{recipes.item}</td>
                                <td>{recipes.nutritions.calories}</td>
                                <td>{recipes.nutritions.serving_size_g}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default IngredientTable;
