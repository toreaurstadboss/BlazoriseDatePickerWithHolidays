using System.Collections.Concurrent;

namespace BlazoriseDatePickerWithHolidays.Service
{
    public class MemoryCache<TKey, TValue> where TKey : notnull
    {
        private readonly ConcurrentDictionary<TKey, TValue> _cache = new();

        public TValue? Get(TKey key)
        {
            _cache.TryGetValue(key, out var value);
            return value;
        }

        public void Add(TKey key, TValue value)
        {
            _cache[key] = value;
        }

        public TValue? GetOrAdd(TKey key, Func<TKey, TValue> valueFactory)
        {
            return _cache.GetOrAdd(key, valueFactory);
        }

        public TValue? GetAsValue(TKey key)
        {
            return Get(key);
        }

    }
}
