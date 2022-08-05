import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import { DirectoryMenuContainer } from './directory.styles.jsx';

const Directory = () => {
  const { sections } = useSelector(
    createStructuredSelector({
      sections: selectDirectorySections,
    })
  );

  return (
    <DirectoryMenuContainer>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </DirectoryMenuContainer>
  );
};

export default Directory;
