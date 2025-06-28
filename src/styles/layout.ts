export const layout = {
  // Center content both vertically and horizontally
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  flexrow:{
    flexDirection: 'row',
  },
  // Horizontal row with centered vertical alignment
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  // Row with space between items
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  // Column layout with centered horizontal alignment
  columnCenter: {
    flexDirection: 'column',
    alignItems: 'center',
  },

  columnStart:{
    flexDirection: 'column',
    alignItems:'flex-start',
  },

  // Center content vertically only
  justifyCenter: {
    justifyContent: 'center',
  },

  // Center content horizontally only
  alignCenter: {
    alignItems: 'center',
  },
  alignStart:{
    alignItems:'flex-start',
  },
  alignEnd:{
    alignItems:'flex-end',
  },
  // Stretch to fill available space
  full: {
    flex: 1,
  },

  // Row with equal spacing around children
  rowSpaceAround: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  // Row with items pushed to start
  rowStart: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  // Row with items pushed to end
  rowEnd: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  // Column layout with space between items
  columnSpaceBetween: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  // Row wrap for flex wrap
  rowWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  selfStart:{
    alignSelf: 'flex-start'
  }
} as const;