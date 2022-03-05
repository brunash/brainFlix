// import Header from '../../components/Header/header';
import "../../App.scss"
import "./upload.scss"
import Thumbnail from "../../assets/images/Upload-video-preview.jpg"
import PublishLogo from "../../assets/images/publish.svg"

function UploadPage () {
    return (
        <>  
            <hr className="top-border"></hr>
            <article className='upload'>
                <h1 className='upload__title'>Upload Video</h1>
                <hr className="upload__border"></hr>
                <div className='upload__hero'>
                    <p className='upload__hero--title'>VIDEO THUMBNAIL</p>
                    <img className='upload__hero--img' src={Thumbnail}/>
                </div>
                <form className='upload__form'>
                    <div className="upload__form--wrap-desktop">
                        <div className="upload__form--hero-desktop">
                            <p className='upload__hero--title'>VIDEO THUMBNAIL</p>
                            <img className='upload__hero--img' src={Thumbnail}/>
                        </div>
                        <div className="upload__form--input-desktop">
                            <label className='upload__form--label' for="title">TITLE YOUR VIDEO</label>
                            <input className='upload__form--input' name="title" placeholder="Add a title to your video"></input>
                            <label className='upload__form--label' for="description">ADD A VIDEO DESCRIPTION</label>
                            <textarea className='upload__form--textarea' name="decription" placeholder="Add a description to your video"/>
                        </div>
                    </div>
                    <hr className="upload__border"></hr>
                    <div className='upload__form--button'>
                        <button  className='upload__form--button--publish'><img src={PublishLogo}/>PUBLISH<div></div></button>
                        <button className='upload__form--button--cancel'><img src={PublishLogo}/>CANCEL<div></div></button>
                    </div>

                </form>

            </article>
        </>
    )
}

export default UploadPage;