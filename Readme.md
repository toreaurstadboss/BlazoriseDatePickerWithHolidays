# Blazorise DatePicker With Holidays Demo

Overall aim of the demo is to showcase a custom date picker component in Blazor WebAssembly that highlights specified dates.
This project demonstrates how to create a reusable date picker component using Blazorise, which highlights Norwegian public holidays. The custom date picker is built on top of Blazorise's `DatePicker` component and uses JavaScript interop to enhance the user experience by highlighting specific dates in the calendar.
<br /><br />   <br />
This Blazor WebAssembly demo showcases a custom date picker component with Norwegian public holidays highlighted. The project demonstrates how to use Blazorise, Flatpickr, and Blazor component patterns to create a rich, interactive date selection experience.
<br /><br />
## Features

- **Custom Date Picker**: A reusable `<CustomDatePicker>` component built on top of Blazorise's `DatePicker`.
- **Holiday Highlighting**: Norwegian public holidays are visually highlighted in the calendar with a pink background and tooltips showing the holiday name.
- **Dynamic Year/Month Handling**: Highlights update automatically when the user navigates between months or years.
- **Tooltip Support**: Hovering over a highlighted date shows the holiday's name.
- **Responsive UI**: Uses Bootstrap and Blazorise for a modern, responsive look.

## Key Components

### `CustomDatePicker.razor`
- Encapsulates the date picker logic and JS interop for highlighting.
- Parameters:
  - `SelectedDate`: The currently selected date (two-way bindable).
  - `HighlightedDays`: List of holidays to highlight (`List<AnnotatedDateTime>`).
  - Supports additional customization via parameters and `AdditionalAttributes`.

### `StyledDatePicker.razor`
- Demo page that uses `CustomDatePicker`.
- Loads holidays for a range of years using `HolidayService`.
- Displays the currently selected date.

### `HolidayService.cs`
- Provides logic to calculate Norwegian public holidays for any year.
- Used to generate the list of highlighted dates.

### `wwwroot/js/datepicker-hightlight.js`
- JavaScript interop for Flatpickr to highlight dates and show tooltips.
- Handles month and year navigation events.

## Getting Started

1. **Restore NuGet and LibMan packages**  
   Ensure all dependencies are restored.

2. **Run the project**  
   Use Visual Studio 2022 or `dotnet run` to start the Blazor WebAssembly app.

3. **Browse to `/`**  
   The main page displays the custom date picker with holidays highlighted.

## Customization

- To change which holidays are highlighted, modify the logic in `HolidayService.cs`.
- The CustomDatePicker is very flexible - Parameter `HighlightedDays` in `CustomDatePicker` can be set to any list of dates - `AnnotatedDateTime` objects to highlight different dates
- To adjust the highlight style, edit the `.pink-day` CSS rule in `wwwroot/css/app.css`.
- The date picker can be reused in other pages by including the `CustomDatePicker` component.
- Additional attributes can be passed to the date picker for further customization.
- See the API docs for Blazorise DatePicker for more options. API is here:
  https://blazorise.com/docs/components/date-picker
- Already some parameters are added for Intellisense support of the DatePicker component, like `DisplayFormat` and `InputFormat`

## Dependencies

- [.NET 8](https://dotnet.microsoft.com/)
- [Blazorise](https://blazorise.com/) (with Bootstrap5 and FontAwesome)
- [Flatpickr](https://flatpickr.js.org/) (via Blazorise)
- Note that the Js interop of Flatpickr is used to highlight the dates, this is already implemented in the custom Blazor component `CustomDatePicker`

## Credits

- Norwegian holiday calculation logic adapted for demo purposes.
- UI built with Blazorise and Bootstrap.

---

**Demo by:**  
Blazorise DatePicker With Holidays  
.NET 8, Blazor WebAssembly

<hr />

<pre>
<code>
Last update:
06.07.2025	
Tore Aurstad
</code>
</pre>

<marquee>
  <p>Blazorise DatePicker With Holidays Demo</p>
</marquee>