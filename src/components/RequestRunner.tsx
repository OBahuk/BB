import React, {Component} from 'react';
import Spinner from '@atlaskit/spinner';
import { connect } from 'react-redux';

import { Centered } from './Styled';
import { stopRequests } from '../redux/actions';
import { AppState } from "../types";

interface ComponentState {
    activeRequestIndex: number,
    timeLeft: number,
    loading: boolean
}

interface ComponentProps extends AppState{
    onRequestsEnd: () => void
}

let timer: number = 0;

class Runner extends Component<ComponentProps, ComponentState>{
    state: Readonly<ComponentState> = {
        activeRequestIndex: 0,
        timeLeft: 0,
        loading: false
    };

    constructor(props: ComponentProps){
        super(props);
        this.state = {
            activeRequestIndex: 0,
            timeLeft: props.requests.length ? props.requests[0].delay : 0,
            loading: props.inProgress
        }
    }

    render(): React.ReactNode {
        const { requests, inProgress } = this.props;
        const { activeRequestIndex, timeLeft, loading } = this.state;

        if(!inProgress){
            return null;
        }

        return (
            <Centered>
                <Spinner size="xlarge" delay={3000} isCompleting={loading} />
                <p>{requests[activeRequestIndex].name}</p>
                <p>{Math.ceil(timeLeft / 1000)}</p>
            </Centered>
        );
    }

    componentDidMount(): void {
        if(this.props.inProgress){
            this.timeChanger();
        }

    }

    componentDidUpdate(prevProps: Readonly<ComponentProps>, prevState: Readonly<ComponentState>, snapshot?: any): void {
        const { inProgress } = this.props;

        if(inProgress){
            this.timeChanger();
        }
    }

    static getDerivedStateFromProps(nextProps: ComponentProps, prevState: ComponentState): null | ComponentState {
        const { inProgress, requests } = nextProps;

        if(!inProgress){
            clearTimeout(timer);
            return {
                activeRequestIndex: 0,
                timeLeft: requests.length ? requests[0].delay : 0,
                loading: inProgress
            };
        }
        return null;
    }

    timeChanger = () => {
        const { timeLeft, activeRequestIndex } = this.state;
        const { requests, onRequestsEnd } = this.props;

        // @ts-ignore
        timer = setTimeout(
                () => {
                if(timeLeft <= 0) {
                    if(activeRequestIndex >= requests.length - 1) {
                        return onRequestsEnd();
                    }

                    const nextIndex = activeRequestIndex + 1;
                    return this.setState({
                        timeLeft: requests[nextIndex].delay,
                        activeRequestIndex: nextIndex
                    })
                }

                this.setState({timeLeft: timeLeft - 1000});
            },
            1000
        )
    }
}

const mapStateToProps = (state: AppState) => ({
    requests: state.requests,
    inProgress: state.inProgress
});

const dispatchProps = {
    onRequestsEnd: stopRequests,
};

export const RequestRunner = connect(
    mapStateToProps,
    dispatchProps
)(Runner);
