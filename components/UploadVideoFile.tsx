const UploadVideoFile = () => {
	return (
		<div className="">
			<input
				type="file"
				name="videoFile"
				id="videoFile"
				className="border rounded shadow-sm pointer border-slate-200"
				accept="video/*"
			/>
		</div>
	);
};

export default UploadVideoFile;
