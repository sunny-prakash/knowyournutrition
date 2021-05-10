import React, { Component } from "react";
import "./App.css";
import InputArea from "../components/InputArea";
import "bootstrap/dist/css/bootstrap.min.css";
import tachyons from "tachyons";
import IngredientTable from "../components/IngredientTable";
import NutritionTable from "../components/NutritionTable";
import Navbar from "../components/Navbar";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            recipes: [],
            showContent: false,
            recipeDataCollection: [],
            allRecipes: [],
            nutritionData: [],
            doFunc: 0,
        };
    }

    componentDidUpdate() {
        if (this.state.recipes.length && this.state.recipeDataCollection.length) {
            this.combineData();
        }
    }

    onChangeInput = (e) => {
        this.setState({ input: e.target.value });
    };

    onClickEvent = async (e) => {
        await this.setState({ recipes: this.state.input.split(/[\n,]+/), showContent: true, doFunc: this.state.recipes.length });
        let btnText = e.target.innerText;
        if (btnText === "New recipe") {
            this.setState({ input: "", showContent: false, allRecipes: [] });
            return;
        }

        const app_id = "9845ad7d";
        const app_key = "a883470ff6bcf615213622083d1dfc2d";

        this.state.recipes.forEach((elem) => {
            this.fetchData(elem, app_id, app_key);
        });
        let recipesString = this.state.recipes.toString();

        const url = `https://api.edamam.com/api/nutrition-data?app_id=${app_id}&app_key=${app_key}&ingr=${recipesString}`;
        await fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                this.setState({ nutritionData: this.state.nutritionData.concat(data) });
            });
    };

    fetchData = async (elem, app_id, app_key) => {
        const url = `https://api.edamam.com/api/nutrition-data?app_id=${app_id}&app_key=${app_key}&ingr=${elem}`;
        await fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                this.setState({ recipeDataCollection: this.state.recipeDataCollection.concat(data) });
            });
    };

    combineData = () => {
        let allRecipes = [];
        let recipes = this.state.recipes;
        let recipeDataCollection = this.state.recipeDataCollection;

        for (let i = 0; i < this.state.recipes.length; i++) {
            allRecipes[i] = {
                id: i,
                item: recipes[i],
                nutritions: recipeDataCollection[i],
            };
        }
        this.setState({ allRecipes: allRecipes, doFunc: 0 });
    };

    render() {
        return (
            <div>
                <Navbar />
                <div className="tc container">
                    <div className="tc">
                        <h1 className="f1 fw7 h_color georgia">{"Nutrition Analysis"}</h1>
                        <h5 className="tc ph5 bg_faded">{'Enter an ingredient list for what you are cooking, like "1 cup rice, 10 oz chickpeas", etc. Enter each ingredient seperated with "," or on a new line.'}</h5>
                    </div>
                    <div className="d-flex justify-content-around pt5">
                        <div>
                            <InputArea textInput={this.state.input} showContent={this.state.showContent} onChangeInput={this.onChangeInput} onClickEvent={this.onClickEvent} />
                            {this.state.showContent && this.state.allRecipes.length === this.state.recipes ? <IngredientTable allRecipes={this.state.allRecipes} /> : ""}
                        </div>
                        {this.state.showContent && this.state.nutritionData.length ? <NutritionTable nutritionData={this.state.nutritionData} /> : ""}
                    </div>
                </div>
                <footer className="tr mt3">
                    Photo by <a href="https://unsplash.com/@louishansel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Louis Hansel</a> on <a href="https://unsplash.com/s/photos/nutrition?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </footer>
            </div>
        );
    }
}

export default App;
