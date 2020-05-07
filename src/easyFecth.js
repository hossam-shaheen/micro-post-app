class EasyHttp {

    async get(url) {

        const resposnse = await fetch(url);
        const responseData = await resposnse.json();
        return responseData;
    }

    async post(url, data) {

        const resposnse = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const responseData = await resposnse.json();
        return responseData;
    }

    async put(url, data) {

        const resposnse = await fetch(url, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const responseData = await resposnse.json();
        return responseData;
    }

    async delete(url) {

        const resposnse = await fetch(url, {
            method: "DELETE"
        });
        const responseData = await resposnse.json();
        return responseData;
    }

}

const easyHttp = new EasyHttp();
export default easyHttp;