import React, {Component} from 'react';

class AddTrip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trips: this.state
            newTrip: {
                id: '',
                user_id: '',
                adventure_type: '',
                title: '',
                location: '',
                duration: '',
                description: '',
                professional: false,
                date: ''
            }
        }
    }

    componentDidMount() {
        axios
            .get()
    }


    render() {
        return (
            <div>

            </div>
        );
    }
}

export default AddTrip;