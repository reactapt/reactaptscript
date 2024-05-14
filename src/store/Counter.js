import { observable } from "mobx";

export const formDataStore = observable({
    formDataList: [],
    formData: { firstName: "", lastName: "" },

    handleSubmit: (e) => {
        e.preventDefault();
        formDataStore.formDataList.push({ ...formDataStore.formData });
        formDataStore.formData = { firstName: "", lastName: "" };
    },

    handleChange: (e) => {
        const { name, value } = e.target;
        formDataStore.formData = { ...formDataStore.formData, [name]: value };
    },

    handleDelete: (index) => {
        formDataStore.formDataList.splice(index, 1);
    }
});