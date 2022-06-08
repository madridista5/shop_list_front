import React, {SyntheticEvent, useContext, useState} from "react";

import './AddProductForm.css';
import {IdContext} from "../../contexts/id.context";
import {apiUrl} from "../../config/api";

export const AddProductForm = () => {
    const {id} = useContext(IdContext);
    const [loading, setLoading] = useState(false);
    const [isAdded, setIsAdded] = useState(false);
    const [form, setForm] = useState({
        name: '',
        price: '',
        description: '',
        shop_id: `${id}`,
    });

    const saveProduct = async (e: SyntheticEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch(`${apiUrl}/products/add`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    ...form,
                }),
            });
            const data = await res.json();
            setIsAdded(data);
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

    if(isAdded) {
        return (<div className="info-h2">
            <h2>Produkt "{form.name}" został poprawnie dodany do sklepu.</h2>
        </div>);
    }

  return <>
      <div className="add-form">
          <form action="" onSubmit={saveProduct}>
              <h1>Dodawanie produktu:</h1>
              <p>
                  <label>
                      Nazwa produktu: <br/>
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
                      Cena: <br/>
                      <input
                          type="number"
                          name="price"
                          required
                          max={999999.99}
                          value={form.price}
                          onChange={e => updateForm('price', e.target.value)}
                      />
                  </label>
              </p>
              <p>
                  <label>
                      Opis produktu: <br/>
                      <input
                          type="text"
                          name="description"
                          maxLength={200}
                          value={form.description}
                          onChange={e => updateForm('description', e.target.value)}
                      />
                  </label>
              </p>
              <button>Zapisz</button>
          </form>
      </div>
  </>
};