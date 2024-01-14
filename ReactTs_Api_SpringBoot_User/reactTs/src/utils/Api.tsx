type ValueId = {
    id: string,
    corpo: {}
}
export const Api = () => {
    const baseUrl = "http://localhost:8080/api";

    const fetchData = async () => {
        try {
            const requisicao = await fetch(`${baseUrl}/users`);
            const reqJson = await requisicao.json();
            return reqJson;
        } catch (err) {
            console.log("Show erro to fetch", err);
        }
    };

    const fetchDataId = async ({ id }: ValueId) => {
        try {
            const requisicao = await fetch(`${baseUrl}/users/${id}`);
            const reqJson = await requisicao.json();
            return reqJson;
        } catch (err) {
            console.log("Show erro to fetch", err);
        }
    };

    const fetchDelete = async ({ id }: ValueId) => {
        try {
            const req = await fetch(`${baseUrl}/users/${id}`, {
                method: "DELETE",
            });
            if (req.ok) {
                alert("Success")
            } else {
                alert("Fail")
            }
        } catch (err) {
            console.log("Error on delete", err);
        }
    }

    const fetchAdd = async ({ corpo }: ValueId) => {
        try {
            const req = await fetch(`${baseUrl}/users/`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(corpo),
            });
            if (req.ok) {
                alert("Success")
            } else {
                alert("Fail")
            }
        } catch (err) {
            console.log("Error on delete", err);
        }
    }

    const fetchUp = async ({ id, corpo }: ValueId) => {
        try {
            const req = await fetch(`${baseUrl}/users/${id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(corpo),
            });
            if (req.ok) {
                alert("Success")
            } else {
                alert("Fail")
            }
        } catch (err) {
            console.log("Error on delete", err);
        }
    }
    return {
        fetchData,
        fetchDataId,
        fetchDelete,
        fetchAdd,
        fetchUp
    };
}
