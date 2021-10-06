import * as React from 'react';
interface WithLoadingProps {
    loading: boolean;
}
const withLoading = <P extends object>(Component: React.ComponentType<P>) => {
    class WithLoading extends React.Component<P & WithLoadingProps> {
      render() {
        const { loading, ...props } = this.props;
        return loading ? <div>Loading...</div> : <Component {...(props as P)} />;
      }
    }
};
export default withLoading;