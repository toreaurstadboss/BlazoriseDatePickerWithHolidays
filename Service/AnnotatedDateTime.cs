namespace BlazoriseDatePickerWithHolidays.Service;

public partial class HolidayService
{
    public class AnnotatedDateTime
    {

        public AnnotatedDateTime(string annotation, DateTime dateValue)
        {
            Annotation = annotation;
            Value = dateValue;
        } //constructor AnnotatedDateTime 

        public string Annotation { get; set; }

        public DateTime Value { get; set; }

    } //class AnnotatedDateTime 

}
