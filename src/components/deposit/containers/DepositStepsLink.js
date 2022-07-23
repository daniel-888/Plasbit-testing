import {connect} from "react-redux";
import DepositView from "../DepositView"
import React from 'react'
import depositStep from "../../../redux/reducers/depositStep";
/*
const mapDispatchToProps = (dispatch, ownProps) => ({
    setDepositStep: () => dispatch(setDepositStep(ownProps.step))
});
*/

const mapStateToProps = (state) => ({
    currentStep: state.depositStep,
    depositForm: state.depositForm
});

export default connect(mapStateToProps, null)(DepositView);
