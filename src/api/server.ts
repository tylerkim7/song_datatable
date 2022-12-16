let token = '5c14c71e8be6122fd8b296688963172619521ebb20dc0844'


export const serverCalls = {
    get : async () => {
        const response = await fetch(`https://phantom-linen-appalachiosaurus.glitch.me/api/songs`, {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }
        return await response.json()
    },

    create: async(data:any) => {
        const response = await fetch(`https://phantom-linen-appalachiosaurus.glitch.me/api/songs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('Failed to create new data on server')
        }
        return await response.json()
    },

    update: async (id: string, data:any) => {
        const response = await fetch(`https://phantom-linen-appalachiosaurus.glitch.me/api/songs/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
    },

    delete: async(id:string) => {
        const response = await fetch(`https://phantom-linen-appalachiosaurus.glitch.me/api/songs/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })
    }

}