import desposeStyles from './Title.module.css';
import '../../../mainStyles.css';

const Title = ({children})=> {
    return (
        <div className={desposeStyles.title}>
            {children}
        </div>
    )
}

export default Title;