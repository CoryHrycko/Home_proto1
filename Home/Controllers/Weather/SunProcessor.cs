using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace DemoLibrary
{
    public class WeatherProcessor
    {
        public static async Task<SunResultModel> LoadWeatherInformation()
        {
            string url = "http://api.openweathermap.org/data/2.5/weather?zip=43093,us&units=imperial&appid=315d048a6a2e4d1ead6bee3276682180";

            using (HttpResponseMessage response = await ApiHelper.ApiClient.GetAsync(url))
            {
                if (response.IsSuccessStatusCode)
                {
                    SunResultModel result = await response.Content.ReadAsAsync<SunResultModel>();

                    return result;
                }
                else
                {
                    throw new Exception(response.ReasonPhrase);
                }
            }
        }
    }
}
