import React from "react";
import InputMask from "react-input-mask";
import { observer } from "mobx-react";
import { formDataStore } from "../../store/Counter";

export const Main = observer(() => {
    return (
        <main>
            <div>
                <form onSubmit={formDataStore.handleSubmit}>
                    <input type="text" name="firstName" placeholder="Имя" value={formDataStore.formData.firstName} onChange={formDataStore.handleChange} required />
                    <input type="text" name="secondName" placeholder="Фамилия" value={formDataStore.formData.secondName} onChange={formDataStore.handleChange} required />
                    <InputMask mask="+7 (999) 999-99-99" maskChar=" " type="text" name="phone" placeholder="Номер телефона" value={formDataStore.formData.phone} onChange={formDataStore.handleChange} required />
                    <input type="submit" value="Отправить" />
                </form>
                <div className="profile">
                {formDataStore.formDataList.map((data, index) => (
                    
                        <div className="dan" key={index}>
                            <p>Фамилия: {data.secondName}</p>
                            <p>Имя: {data.firstName}</p>
                            <p>Телефон: {data.phone}</p>
                            <button className="del" onClick={() => formDataStore.handleDelete(index)}>Удалить</button>
                        </div> 
                    
                    
                ))}
                </div>
            </div>
        </main>
    );
});