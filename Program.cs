using Blazorise;
using Blazorise.Bootstrap5;
using Blazorise.Icons.FontAwesome;
using BlazoriseDatePickerWithHolidays;
using BlazoriseDatePickerWithHolidays.Service;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;


var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

builder.Services
.AddSingleton<IHolidayService, HolidayService>()
.AddBlazorise(options =>
{
    options.Immediate = true; // Use immediate mode for Blazorise components
})
.AddFontAwesomeIcons()
.AddBootstrap5Providers()
.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });

await builder.Build().RunAsync();
