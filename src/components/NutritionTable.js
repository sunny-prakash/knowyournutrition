import React from "react";

// let labelArray = ["ENERC_KCAL", "FAT", "FASAT", "CHOCDF", "PROCNT", "CHOLE", "CA", "NA", "MG", "K", "FE", "ZN", "VITC", "VITB6A", "VITB12", "VITD"];

const NutritionTable = ({ nutritionData }) => {
    return (
        <div className="navy nutrition_box bodoni fw6">
            <div>
                <h1 className="mt-0 f1 underline">{"Nutrition Facts"}</h1>
                <h3>{"Amount Per Serving"}</h3>
                <h1 className="d-flex justify-content-between underline">
                    <span>Calories</span>
                    <span>{nutritionData[0].calories}</span>
                </h1>
                <table className="table table-info table-striped navy">
                    <thead>
                        <tr>
                            <th>{"Nutrients"}</th>
                            <th>{"Unit"}</th>
                            <th>{"% Daily Value*"}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{"Energy"}</td>
                            <td>{`${nutritionData[0].totalNutrients.ENERC_KCAL.quantity.toFixed(2)} ${nutritionData[0].totalNutrients.ENERC_KCAL.unit}`}</td>
                            <td>{`${nutritionData[0].totalDaily.ENERC_KCAL.quantity.toFixed(2)} ${nutritionData[0].totalDaily.ENERC_KCAL.unit}`}</td>
                        </tr>
                        <tr>
                            <td>{"Total Fat"}</td>
                            <td>{`${nutritionData[0].totalNutrients.FAT.quantity.toFixed(2)} ${nutritionData[0].totalNutrients.FAT.unit}`}</td>
                            <td>{`${nutritionData[0].totalDaily.FAT.quantity.toFixed(2)} ${nutritionData[0].totalDaily.FAT.unit}`}</td>
                        </tr>
                        <tr>
                            <td>{"Saturated Fat"}</td>
                            <td>{`${nutritionData[0].totalNutrients.FASAT.quantity.toFixed(2)} ${nutritionData[0].totalNutrients.FASAT.unit}`}</td>
                            <td>{`${nutritionData[0].totalDaily.FASAT.quantity.toFixed(2)} ${nutritionData[0].totalDaily.FASAT.unit}`}</td>
                        </tr>
                        <tr>
                            <td>{"Carbs"}</td>
                            <td>{`${nutritionData[0].totalNutrients.CHOCDF.quantity.toFixed(2)} ${nutritionData[0].totalNutrients.CHOCDF.unit}`}</td>
                            <td>{`${nutritionData[0].totalDaily.CHOCDF.quantity.toFixed(2)} ${nutritionData[0].totalDaily.CHOCDF.unit}`}</td>
                        </tr>
                        <tr>
                            <td>{"Protein"}</td>
                            <td>{`${nutritionData[0].totalNutrients.PROCNT.quantity.toFixed(2)} ${nutritionData[0].totalNutrients.PROCNT.unit}`}</td>
                            <td>{`${nutritionData[0].totalDaily.PROCNT.quantity.toFixed(2)} ${nutritionData[0].totalDaily.PROCNT.unit}`}</td>
                        </tr>
                        <tr>
                            <td>{"Cholesterol"}</td>
                            <td>{`${nutritionData[0].totalNutrients.CHOLE.quantity.toFixed(2)} ${nutritionData[0].totalNutrients.CHOLE.unit}`}</td>
                            <td>{`${nutritionData[0].totalDaily.CHOLE.quantity.toFixed(2)} ${nutritionData[0].totalDaily.CHOLE.unit}`}</td>
                        </tr>
                        <tr>
                            <td>{"Calcium"}</td>
                            <td>{`${nutritionData[0].totalNutrients.CA.quantity.toFixed(2)} ${nutritionData[0].totalNutrients.CA.unit}`}</td>
                            <td>{`${nutritionData[0].totalDaily.CA.quantity.toFixed(2)} ${nutritionData[0].totalDaily.CA.unit}`}</td>
                        </tr>
                        <tr>
                            <td>{"Sodium"}</td>
                            <td>{`${nutritionData[0].totalNutrients.NA.quantity.toFixed(2)} ${nutritionData[0].totalNutrients.NA.unit}`}</td>
                            <td>{`${nutritionData[0].totalDaily.NA.quantity.toFixed(2)} ${nutritionData[0].totalDaily.NA.unit}`}</td>
                        </tr>
                        <tr>
                            <td>{"Magnesium"}</td>
                            <td>{`${nutritionData[0].totalNutrients.MG.quantity.toFixed(2)} ${nutritionData[0].totalNutrients.MG.unit}`}</td>
                            <td>{`${nutritionData[0].totalDaily.MG.quantity.toFixed(2)} ${nutritionData[0].totalDaily.MG.unit}`}</td>
                        </tr>
                        <tr>
                            <td>{"Potassium"}</td>
                            <td>{`${nutritionData[0].totalNutrients.K.quantity.toFixed(2)} ${nutritionData[0].totalNutrients.K.unit}`}</td>
                            <td>{`${nutritionData[0].totalDaily.K.quantity.toFixed(2)} ${nutritionData[0].totalDaily.K.unit}`}</td>
                        </tr>
                        <tr>
                            <td>{"Iron"}</td>
                            <td>{`${nutritionData[0].totalNutrients.FE.quantity.toFixed(2)} ${nutritionData[0].totalNutrients.FE.unit}`}</td>
                            <td>{`${nutritionData[0].totalDaily.FE.quantity.toFixed(2)} ${nutritionData[0].totalDaily.FE.unit}`}</td>
                        </tr>
                        <tr>
                            <td>{"Zinc"}</td>
                            <td>{`${nutritionData[0].totalNutrients.ZN.quantity.toFixed(2)} ${nutritionData[0].totalNutrients.ZN.unit}`}</td>
                            <td>{`${nutritionData[0].totalDaily.ZN.quantity.toFixed(2)} ${nutritionData[0].totalDaily.ZN.unit}`}</td>
                        </tr>
                        <tr>
                            <td>{"Vitamin C"}</td>
                            <td>{`${nutritionData[0].totalNutrients.VITC.quantity.toFixed(2)} ${nutritionData[0].totalNutrients.VITC.unit}`}</td>
                            <td>{`${nutritionData[0].totalDaily.VITC.quantity.toFixed(2)} ${nutritionData[0].totalDaily.VITC.unit}`}</td>
                        </tr>
                        <tr>
                            <td>{"Vitamin B6"}</td>
                            <td>{`${nutritionData[0].totalNutrients.VITB6A.quantity.toFixed(2)} ${nutritionData[0].totalNutrients.VITB6A.unit}`}</td>
                            <td>{`${nutritionData[0].totalDaily.VITB6A.quantity.toFixed(2)} ${nutritionData[0].totalDaily.VITB6A.unit}`}</td>
                        </tr>
                        <tr>
                            <td>{"Vitamin B12"}</td>
                            <td>{`${nutritionData[0].totalNutrients.VITB12.quantity.toFixed(2)} ${nutritionData[0].totalNutrients.VITB12.unit}`}</td>
                            <td>{`${nutritionData[0].totalDaily.VITB12.quantity.toFixed(2)} ${nutritionData[0].totalDaily.VITB12.unit}`}</td>
                        </tr>
                        <tr>
                            <td>{"Vitamin D"}</td>
                            <td>{`${nutritionData[0].totalNutrients.VITD.quantity.toFixed(2)} ${nutritionData[0].totalNutrients.VITD.unit}`}</td>
                            <td>{`${nutritionData[0].totalDaily.VITD.quantity.toFixed(2)} ${nutritionData[0].totalDaily.VITD.unit}`}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="3">{"*Percent Daily Values are based on a 2000 calorie diet"}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default NutritionTable;
