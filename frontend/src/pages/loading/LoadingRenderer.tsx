const LoadingRenderer = (params: { value: string }) => {
	if (params.value) return parseInt(params.value) + 1;
	return <div className="spinner-border spinner-border-sm" role="status" />;
};

export default LoadingRenderer;
