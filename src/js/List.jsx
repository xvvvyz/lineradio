import preact from 'preact';
import Tag from './Tag.jsx';
import shuffleSvg from '../svg/shuffle.svg';
import '../scss/List.scss';

export default props => !!props.items.length && (
  <div className="List">
    {props.title && <button className="List_header" onClick={props.shuffle}>
      <span>{props.title}</span>
      <span className="List_shuffle"><img src={shuffleSvg} /></span>
    </button>}
    <ul>
      {props.items.map(item => <Tag
        value={typeof item === 'object' ? item.name : item}
        image={typeof item === 'object' ? item.image : null}
        onClick={props.addTags}
      />)}
    </ul>
  </div>
);
