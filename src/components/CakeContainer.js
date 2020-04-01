import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux'



function CakeContainer(props){
    console.log(props)
    return (
        <div>
            <h2>Number of cakes - {props.numberOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        numberOfCakes: state.numberOfCakes
    }
}

const mapDispachToProps = (dispach) => {
    return {
        buyCake: () => dispach(buyCake())
    }
}


export default connect(mapStateToProps, mapDispachToProps)(CakeContainer) ;