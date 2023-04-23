import React, {Component} from 'react';

class Detail extends Component {
    render() {
        console.log(this.props.match);
        const id = this.props.match.params.demoId;
        return (
            <div className={'container'}>
                <div className={'card'} style={{
                    width:200
                }}>

                    <img src={`https:/i.pravatar.cc?img=${id}`} alt={'...'} style={{
                        width: 200,
                        height: 200,
                    }}/>
                    <div className={'card-body'}>
                        <p>Price: {id}</p>
                        <button className={'btn btn-primary'}>Add Card</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Detail;
