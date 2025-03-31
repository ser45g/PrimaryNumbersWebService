using System.Numerics;

namespace PrimaryNumbersAPI.Responses
{
    public record class GetPrimaryNumbersResponse (IEnumerable<BigInteger> PrimaryNumbers, BigInteger Total, BigInteger Start, BigInteger End);
}
