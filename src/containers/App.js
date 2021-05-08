import React, { Component } from "react";
import "./App.css";
import InputArea from "../components/InputArea";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            recipes: [],
        };
    }
    onChangeInput = (e) => {
        this.setState({ input: e.target.value });
    };

    onClickEvent = async () => {
        await this.setState({ recipes: this.state.input.split(/[\n,]+/) });
        const app_id = "814ad540";
        const app_key = "8126223d30d294f4c6758495897da171";
        console.log(this.state.recipes);
        let allRecipes = this.state.recipes.map((elem, i) => {
            let nutri = fetch(`https://api.edamam.com/api/nutrition-data?app_id=${app_id}&app_key=${app_key}&ingr=${elem}`).json();
            return (elem = {
                id: i,
                ingerdient: elem,
                nutriotions: nutri,
            });
        });
        console.log(allRecipes);
        let resp = await fetch(`https://api.edamam.com/api/nutrition-data?app_id=${app_id}&app_key=${app_key}&ingr=${this.state.input}`);
        let data = await resp.json();
        console.log(data);
        console.log(this.state.input);
    };
    render() {
        return (
            <div>
                <InputArea onChangeInput={this.onChangeInput} onClickEvent={this.onClickEvent} />
            </div>
        );
    }
}

export default App;
