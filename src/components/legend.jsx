const LegendChart = ({ data }) => {
	return (
		<div className="flex gap-6 justify-center items-center">
			{data.map((item, index) => (
				<div key={index} className="flex items-center gap-2">
					<div className={`w-2 h-2 rounded-[2px] ${item.color}`}></div>
					<p className="text-xs">{item.label}</p>
				</div>
			))}
		</div>
	);
};

export default LegendChart;
