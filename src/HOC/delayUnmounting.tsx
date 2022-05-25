import React, {useEffect} from "react";

export function delayUnmounting(Component: React.FC) {
    const innerComponent: React.FC<{delayTime: number}> = ({delayTime}) => {
        return <>
            {Component}
        </>
    }
    return ()=>{
        useEffect(()=>{
            return ()=>{

            }
        },[])
    }
    // return class extends React.Component {
    //     state = {
    //         shouldRender: this.props.isMounted
    //     };
    //
    //     componentDidUpdate(prevProps) {
    //         if (prevProps.isMounted && !this.props.isMounted) {
    //             setTimeout(
    //                 () => this.setState({shouldRender: false}),
    //                 this.props.delayTime
    //             );
    //         } else if (!prevProps.isMounted && this.props.isMounted) {
    //             this.setState({shouldRender: true});
    //         }
    //     }
    //
    //     render() {
    //         return this.state.shouldRender ? <Component {...this.props} /> : null;
    //     }
    // };
}