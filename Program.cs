using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using BlazoriseDatePickerWithHolidays;
using Blazorise;
using Blazorise.Bootstrap5;


var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

builder.Services 
.AddBlazorise(options => {
    options.Immediate = false; // Use immediate mode for Blazorise components
})
.AddBootstrap5Providers()
.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });

await builder.Build().RunAsync();
