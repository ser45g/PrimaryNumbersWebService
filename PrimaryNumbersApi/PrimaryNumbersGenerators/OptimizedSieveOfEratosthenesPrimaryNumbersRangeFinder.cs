using System.Numerics;


namespace PrimaryNumbersGenerators
{
    public class OptimizedSieveOfEratosthenesPrimaryNumbersRangeFinder : IPrimaryNumbersRangeFinder
    {
        public event Action<BigInteger> NextPrimaryNumberWasFound;
        private IBigIntegerSqrtFinder _bigIntegerSqrtFinder;

        public OptimizedSieveOfEratosthenesPrimaryNumbersRangeFinder(IBigIntegerSqrtFinder bigIntegerSqrtFinder)
        {
            _bigIntegerSqrtFinder = bigIntegerSqrtFinder;
        }

        public IEnumerable<BigInteger> GetPrimaryNumbersInRange(BigInteger start, BigInteger end)
        {

           
            Dictionary<BigInteger, bool> isPrime=sieveOfEratosthenes(end);
        
            //sieveOfEratosthenes(end);
            List<BigInteger> result = new List<BigInteger>();

            // Count the number of primes in the range [m, n]
            int count = 0;

          
            foreach (var pair in isPrime)
            {
                if (pair.Value && pair.Key >= start) {
                    if (NextPrimaryNumberWasFound != null)
                    {
                        NextPrimaryNumberWasFound.Invoke(pair.Key);
                    }
                    result.Add(pair.Key);
                }
            }
            
           
            return result;
        }

       //public OptimizedSieveOfEratosthenes(int length)
       //{
       //    int Length = length;
       //    Data = new BitArray(Length / 2 + 1);
       //    Data.SetAll(true);
       //
       //    int maxFactor = (int)Math.Sqrt(Length);
       //
       //    for (int p = 3; p <= maxFactor; p += 2)
       //    {
       //        if (Data[p / 2])
       //        {
       //            for (int i = p * p; i < Length; i += 2 * p)
       //            {
       //                Data[i / 2] = false;
       //            }
       //        }
       //    }
       //}
        private Dictionary<BigInteger,bool> sieveOfEratosthenes(BigInteger end)
        {

            // Create a boolean array "prime[0..n]"
            // and initialize all entries as true.
            // A value in prime[i] will be false
            // if 'i' is not prime, otherwise true.
            Dictionary<BigInteger,bool> prime = new();
            prime.Add(2, true);
            for (BigInteger i = 3; i <= end; i+=2)
                prime[i]= true;

            // Mark 0 and 1 as non-prime
    

            // Loop through numbers from 2 to sqrt(n)
            // to mark their multiples as non-prime
            //Stopwatch stopwatch1 = new();
            //stopwatch1.Start();
            BigInteger maxFactor = _bigIntegerSqrtFinder.GetSqrt(end);
            //stopwatch1.Stop();
            //Console.WriteLine(stopwatch1.ElapsedMilliseconds.ToString() + " ms");
            for (BigInteger p = 3; p * p <=end  ; p+=2)
            {

                // If prime[p] is still true, it means 'p' is
                // prime
                if (prime[p])
                {

                    // Mark all multiples of p greater
                    // than or equal to p^2 as non-prime
                    // Numbers less than p^2 would
                    // have already been marked as non-prime
                    for (BigInteger i = p * p; i <= end; i +=2* p)
                        prime[i] = false;
                    
                }
            }

            return prime;
        }
    }
}
