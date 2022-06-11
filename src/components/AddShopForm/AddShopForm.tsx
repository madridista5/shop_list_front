import React, {SyntheticEvent, useState} from "react";
import {geocode} from "../../utils/geocoding";
import {apiUrl} from "../../config/api";

import './AddShopForm.css';

export const AddShopForm = () => {
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState(false);
    const [form, setForm] = useState({
        name: '',
        category: '',
        url: '',
        address: '',
    });

    const saveShop = async (e: SyntheticEvent) => {
        e.preventDefault();

        setLoading(true);

        try {
            const {lat, lon} = await geocode(form.address);
            const res = await fetch(`${apiUrl}/shops/add`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    ...form,
                    lat,
                    lon,
                }),
            });
            const data = await res.json();
            setId(data.id);
        } finally {
            setLoading(false);
        }
    };

    const updateForm = (key: string, value: string) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }));
    };

    if(loading) {
        return (<div className="info-h2">
            <h2>Trwa dodawanie ogłoszenia....</h2>;
        </div>);
    }

    if(id) {
        return (<div className="info-h2">
            <h2>Twój sklep "{form.name}" został poprawnie dodany. Aby uzupełnić listę produktów Twojego sklepu przejdź do "Lista Sklepów"</h2>
        </div>);
    }

    return (
        <div className="add-form">
            <form action="" onSubmit={saveShop}>
                <h1>Dodawanie sklepu</h1>
                <p>
                    <label>
                        Nazwa sklepu: <br/>
                        <input
                            type="text"
                            name="name"
                            required
                            maxLength={30}
                            value={form.name}
                            onChange={e => updateForm('name', e.target.value)}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Kategoria: <br/>
                        <input
                            type="text"
                            name="category"
                            required
                            maxLength={30}
                            value={form.category}
                            onChange={e => updateForm('category', e.target.value)}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Adres URL: <br/>
                        <input
                            type="url"
                            name="url"
                            maxLength={100}
                            value={form.url}
                            placeholder="https://....."
                            onChange={e => updateForm('url', e.target.value)}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Adres (wpisz w następującej kolejności: Miasto, NazwaUlicy Numer): <br/>
                        <input
                            type="text"
                            name="address"
                            required
                            placeholder={`Np: Kłodzko, Noworudzka 2`}
                            onChange={e => updateForm('address', e.target.value)}
                        />
                    </label>
                </p>
                <button>Zapisz</button>
            </form>
        </div>
    );
};