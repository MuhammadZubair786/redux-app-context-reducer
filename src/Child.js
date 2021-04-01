import React, { useContext, useState } from 'react';
import { GlobalContext } from './Store/GlobalState'
function Child() {

    const { User,User_Register  } = useContext(GlobalContext)
    const { addUser} = useContext(GlobalContext)
    const [name, setname] = useState()
    const [email, setemail] = useState()

    console.log("State Data In Child : ",User," Total User Register : ",User_Register)

    const add_data = () => {
        // console.log("Name ", name)
        // console.log("Email :", email)
        const user = {
            name: name,
            email: email
        }
        addUser(user)
        setname('')
        setemail('')
    }

    return (
        <div>

            <input type="text" placeholder="Enter data" value={name||''} onChange={(e) => setname(e.target.value)} />
            <input type="text" placeholder='Amount' value={email||''} onChange={(e) => setemail(e.target.value)} />

            <button onClick={() => { add_data() }}>
                submit
            </button>
        </div>
    );
}

export default Child;