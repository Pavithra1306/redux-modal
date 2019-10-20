import React, { Component } from 'react';
import {connect} from 'react-redux';

class Modal extends Component {
    constructor(props) {
        super(props);
       console.log("props",props)
        //this.handleSave = this.handleSave.bind(this);
        this.state={
            title : this.props.title,
            msg : this.props.msg
        }
      
    }

   componentWillReceiveProps(props){
       this.setState({
            title : props.title,
            msg : props.msg
        })
    }
   /* static getDerivedStateFromProps(props,state){
      console.log("title",props)
        return{title : props.title, msg:props.msg}
    }*/
   
  

    titleHandler(e) {
        this.setState({ title: e.target.value });
    }

    msgHandler(e) {
        this.setState({ msg: e.target.value });
    }

    handleSave() {
        const item = this.state;
        const tmpBrochure = this.props.brochure;
        tmpBrochure[this.props.requiredItem]=item;
        this.props.saveModalDetails(tmpBrochure)
    }

    render() {
       return (
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Jewel</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p><span className="modal-lable">Title:</span><input value={this.state.title} onChange={(e) => this.titleHandler(e)} /></p>
                            <p><span className="modal-lable">Msg:</span><input value={this.state.msg} onChange={(e) => this.msgHandler(e)} /></p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => { this.handleSave() }}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps=(state)=>({
    requiredItem : state.requiredItem,
    brochure : state.brochure
    })

    const mapDispatchToProps=(dispatch)=>({
        replaceModalItem :(index)=>{
            dispatch({
                type: "REPLACEMODALITEM",
                payload : index
            })
        },

        saveModalDetails : (tempbrochure)=>{
             dispatch({
                type: "SAVEMODAL",
                payload : tempbrochure
            })
            
        }
       
      })

      export default connect(mapStateToProps,mapDispatchToProps)(Modal);

