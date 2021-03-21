import { Button } from 'antd';
import {connect} from 'react-redux';
import { add, subtract } from '../actions/action';

const Counter = (props) => {
    const {state,add,subtract} = props;
    return ( 
        <div className="counter">
           <Button type="primary" onClick={()=>subtract()} size="large">-</Button>
           <span className="value">{state}</span>
           <Button type="primary" onClick={()=>add()} size="large">+</Button>
        </div>
     );
}

const mapStateToProps = (state)=>{
    return {
        state
    }
}

const mapDispatchToProps = (dispatch)=>{
   return{
       add :()=>dispatch(add),
       subtract:()=>dispatch(subtract)
   }
}

 
export default connect(mapStateToProps,mapDispatchToProps)(Counter);