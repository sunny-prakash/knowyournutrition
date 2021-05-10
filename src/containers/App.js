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
            allRecipes: [],
            showContent: true,
        };
    }
    componentDidUpdate() {
        console.log("inside componentDidUpdate");
        console.log(this.state.allRecipes.length);
        if (this.state.allRecipes.length) {
            console.log(this.state.allRecipes[0].nutritions);
        }
    }
    onChangeInput = (e) => {
        this.setState({ input: e.target.value });
    };

    onClickEvent = async (e) => {
        await this.setState({ recipes: this.state.input.split(/[\n,]+/), showContent: true });
        let btnText = e.target.innerText;
        if (btnText === "New recipe") {
            this.setState({ input: "", showContent: false });
            return;
        }
        // console.log("analyze initiate");
        let allRecipes = await this.state.recipes.map((elem, i) => {
            let nutri = this.fetchData(elem);

            return {
                id: i,
                ingerdient: elem,
                nutritions: nutri,
            };
        });
        // let data = this.fetchData(this.state.recipes);
        // console.log(data);
        Promise.resolve(allRecipes);
        await this.setState({ allRecipes }, () => {
            console.log(allRecipes[0].nutritions.calories);
        });
    };

    fetchData = async (elem) => {
        const app_id = "9845ad7d";
        const app_key = "a883470ff6bcf615213622083d1dfc2d";
        const url = `https://api.edamam.com/api/nutrition-data?app_id=${app_id}&app_key=${app_key}&ingr=${elem}`;

        return await fetch(url)
            .then((resp) => resp.json())
            .then((res) => res);
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
                            {this.state.showContent ? <IngredientTable allRecipes={this.state.allRecipes} /> : ""}
                        </div>
                        {this.state.showContent ? <NutritionTable /> : ""}
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
