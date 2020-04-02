import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux'


function CakeContainer(props) {
    const [cakeRequired, setCakeRequired] = useState(1);
    return (
        <div>
            <h2>Number of cakes {'>'} {props.numOfCakes}</h2>
            <input type='number' onChange={e => {setCakeRequired(e.target.value)}} defaultValue={cakeRequired} />
            <button onClick={() => props.buyCake(cakeRequired)}>Buy {cakeRequired} Cake</button>
        </div>
    )
};

const mapStateToProps = (state) => {
    // console.log('state in mapStateToProps - ', state)
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispachToProps = (dispach) => {
    return {
        buyCake: (cakeRequired) => dispach(buyCake(cakeRequired))
    }
}


export default connect(
    mapStateToProps,
    mapDispachToProps
)(CakeContainer);