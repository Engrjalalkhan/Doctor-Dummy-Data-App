import React, {useState} from 'react';
import {
  Modal,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import {Calendar} from 'react-native-calendars';

const CustomCalendar = ({visible, onClose, onSelectDate}) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [viewMode, setViewMode] = useState('month'); // 'month' or 'year'
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  // Update the formatDate function to show the full year
  const formatDate = date => {
    const dateObj = new Date(date);
    const month = dateObj.getMonth() + 1; // Month is zero-based
    const day = dateObj.getDate();
    const year = dateObj.getFullYear(); // Use full year (e.g., 2024)
    return `${month < 10 ? '0' + month : month}/${
      day < 10 ? '0' + day : day
    }/${year}`;
  };

  const handleDayPress = day => {
    const formattedDate = formatDate(day.dateString);
    setSelectedDate(formattedDate);
    onSelectDate(formattedDate);
    onClose(); // Close the modal after date selection
  };

  const handleYearPress = year => {
    setSelectedYear(year);
    setViewMode('month'); // Switch back to month view
  };

  const handleClose = () => {
    if (viewMode === 'year') {
      setViewMode('month'); // Close year view only
    } else {
      onClose(); // Close the entire modal
    }
  };

  const generateYears = () => {
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 100;
    const endYear = currentYear + 100;
    const years = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push(year);
    }
    return years;
  };

  const renderYearSelection = () => (
    <ScrollView style={styles.yearList}>
      {generateYears().map(year => (
        <TouchableOpacity
          key={year}
          style={styles.yearItem}
          onPress={() => handleYearPress(year)}>
          <Text style={styles.yearText}>{year}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.calendarContainer}>
          {viewMode === 'month' ? (
            <>
              <Calendar
                current={`${selectedYear}-${String(
                  new Date().getMonth() + 1,
                ).padStart(2, '0')}-01`}
                onDayPress={handleDayPress}
                markedDates={{
                  [selectedDate]: {
                    selected: true,
                    marked: true,
                    selectedColor: '#DF4B38',
                  },
                }}
                onPressArrowLeft={subtractMonth => subtractMonth()}
                onPressArrowRight={addMonth => addMonth()}
                theme={{
                  arrowColor: '#DF4B38',
                }}
              />
              <TouchableOpacity
                onPress={() => setViewMode('year')}
                style={styles.yearSwitchButton}>
                <Text style={styles.yearSwitchText}>{selectedYear}</Text>
              </TouchableOpacity>
            </>
          ) : (
            renderYearSelection()
          )}
          <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>
              {viewMode === 'year' ? 'Close' : 'Close'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CustomCalendar;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  calendarContainer: {
    width: 300, // Same width as the calendar
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    elevation: 10,
  },
  closeButton: {
    marginTop: 10,
    backgroundColor: '#DF4B38',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  yearSwitchButton: {
    marginTop: 10,
    alignSelf: 'center',
  },
  yearSwitchText: {
    fontSize: 18,
    color: '#DF4B38',
    fontWeight: 'bold',
  },
  yearList: {
    maxHeight: 300, // Limit height to 300px
  },
  yearItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#DF4B38',
    alignItems: 'center',
  },
  yearText: {
    fontSize: 16,
    color: '#DF4B38',
  },
});
