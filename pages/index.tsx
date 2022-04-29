// package import(s)
import { NextPage } from 'next';
// component import(s)
import Button from 'components/Button';
import FlexBox from 'components/FlexBox';
import Container from 'components/Container';
import ProtectedPage from 'components/protectedPage';
import ProcessingData from 'components/ProcessingData';
import VideoComponent from 'components/VideoComponent';
import UploadVideoFile from 'components/UploadVideoFile';

const HomePage: NextPage = () => {
	return (
		<ProtectedPage>
			<main>
				<Container>
					<FlexBox>
						<UploadVideoFile />
						<VideoComponent />
						<Button name="Send for processing" color="bg-slate-900 text-white" />
						<ProcessingData />
					</FlexBox>
				</Container>
			</main>
		</ProtectedPage>
	);
};

export default HomePage;
