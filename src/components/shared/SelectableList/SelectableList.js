import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectableList extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    activeItems: PropTypes.arrayOf(PropTypes.number).isRequired,
    toggleSelect: PropTypes.func.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  state = {
    showMore: false,
  };

  toggleShowMore = showMore => this.setState({ showMore });

  render() {
    const { title, list, toggleSelect, className, activeItems } = this.props;
    const { showMore } = this.state;
    return (
      <div className={className}>
        <h2 className="listSubhead">{title}</h2>
        <ul className="listWrap">
          {list.map(({ id, name }, index) => {
            const activeClass = activeItems.includes(id) ? ' active' : '';
            return index < 15 && (
              <li className={`listItem${activeClass}`} key={id} onClick={() => toggleSelect(id)}>{name}</li>
            );
          })}
          {list.length > 15 && (
            <li
              className="listItem seeMore"
              onClick={() => this.toggleShowMore(true)}
            >More Cuisines</li>
          )}
        </ul>
        {showMore && (
          <div className="fullListOverlay">
            <div className="overlay" onClick={() => this.toggleShowMore()} />
            <ul className="listWrap overlayListWrap">
              {list.map(({ id, name }) => {
                const activeClass = activeItems.includes(id) ? ' active' : '';
                return (
                  <li className={`listItem${activeClass}`} key={id} onClick={() => toggleSelect(id)}>{name}</li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default SelectableList;
