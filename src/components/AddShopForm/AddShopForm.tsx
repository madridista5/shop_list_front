import React from "react";

import './AddShopForm.css';

export const AddShopForm = () => {
    return (
        <div className="add-form">
            <form action="">
                <h1>Dodawanie sklepu</h1>
                <p>
                    <label>
                        Nazwa sklepu: <br/>
                        <input type="text" name="name" required maxLength={30}/>
                    </label>
                </p>
                <p>
                    <label>
                        Kategoria: <br/>
                        <input type="text" name="category" required maxLength={30}/>
                    </label>
                </p>
                <p>
                    <label>
                        Adres URL: <br/>
                        <input type="text" name="url" required maxLength={100}/>
                    </label>
                </p>
                <p>
                    <label>
                        Adres (wpisz w następującej kolejności: "Miasto, NazwaUlicy Numer"): <br/>
                        <input type="text" name="address" required/>
                    </label>
                </p>
            </form>
        </div>
    );
};