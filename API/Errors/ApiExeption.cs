namespace API.Errors
{
    public class ApiExeption : ApiResponse
    {
        public string Details { get; set; }

        public ApiExeption(int statusCode, string message = null, string details = null) : base(statusCode, message)
        {
            Details = details;
        }

    }
}
