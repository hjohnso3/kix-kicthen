import notFound from '../images/404.jpg';

const NotFoundPage = () => {
    return (
        <div>
			 <img alt="404_image" src={notFound} className="center-page" />
		  </div>
    );
}

export default NotFoundPage;