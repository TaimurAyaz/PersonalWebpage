function LoaderView(props: { additionalClasses?: string } | undefined) {
	return (
		<div className={`${'spinner spinner-large h-4 w-4 scale-[0.55]'} ${props?.additionalClasses ?? ""}`} >
			<div className="spinner-container">
				<div className="spinner-nib spinner-nib-1"></div>
				<div className="spinner-nib spinner-nib-2"></div>
				<div className="spinner-nib spinner-nib-3"></div>
				<div className="spinner-nib spinner-nib-4"></div>
				<div className="spinner-nib spinner-nib-5"></div>
				<div className="spinner-nib spinner-nib-6"></div>
				<div className="spinner-nib spinner-nib-7"></div>
				<div className="spinner-nib spinner-nib-8"></div>
			</div>
		</div>
	)
}

export default LoaderView
