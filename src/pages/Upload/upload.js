// import Header from '../../components/Header/header';
import "../../App.scss"

function UploadPage () {
    return (
        <>
            <article className='upload'>
                <h1 className='upload__title'>Upload Video</h1>
                <hero className='upload__hero'>
                    <p className='upload__hero--title'>VIDEO THUMBNAIL</p>
                    <img className='upload__hero--img' />
                </hero>
                <form className='upload__form'>
                    <label className='upload__form--label' >TITLE YOUR VIDEO</label>
                    <input className='upload__form--input'></input>
                    <label className='upload__form--label'>TITLE YOUR VIDEO</label>
                    <textarea className='upload__form--textarea' />
                    <div className='upload__form--button'>
                        <button className='upload__form--button-publish'>PUBLISH</button>
                        <button className='upload__form--button--cancel'>CANCEL</button>
                    </div>

                </form>

            </article>
        </>
    )
}

export default UploadPage;