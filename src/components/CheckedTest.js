import React from "react";

class CheckedTest extends React.Component{
    constructor(){
        super();
        this.state = {
            settings: {
                receiveWhatsappNotification: true
            }
        }
    }


    handleChange(event){
        const target = event.target;
        const value = target.id === 'receiveWhatsappNotification' ? target.checked : target.value;
        const id = target.id;

        this.setState({
            [id]: value
        });
    }

    render(){
        const { receiveWhatsappNotification } = this.state.settings;
        return(
            <div>
                <h2>Whatsapp Notification: </h2>
                <input 
                    type="checkbox"
                    id="receiveWhatsappNotification"
                    checked={receiveWhatsappNotification}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

export default CheckedTest;