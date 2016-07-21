require 'csv'
require 'pry'

class SortWords
  def initialize
    arr = File.foreach('common-english-words.txt').map { |line| line.split(',') }
    sort_words(arr.first)
  end

  def sort_words(arr)
    sorted = arr.sort_by(&:length)
    binding.pry
    puts sorted
  end

  # def mergesort(array)
  #   def merge(left_sorted, right_sorted)
  #     res = []
  #     l = 0
  #     r = 0

  #     loop do
  #       break if r >= right_sorted.length and l >= left_sorted.length

  #       if r >= right_sorted.length or (l < left_sorted.length and left_sorted[l] < right_sorted[r])
  #         res << left_sorted[l]
  #         l += 1
  #       else
  #         res << right_sorted[r]
  #         r += 1
  #       end
  #     end

  #     return res
  #   end

  #   def mergesort_iter(array_sliced)
  #     return array_sliced if array_sliced.length <= 1

  #     mid = array_sliced.length/2 - 1
  #     left_sorted = mergesort_iter(array_sliced[0..mid])
  #     right_sorted = mergesort_iter(array_sliced[mid+1..-1])
  #     return merge(left_sorted, right_sorted)
  #   end

  #   mergesort_iter(array)
  # end
end

SortWords.new

# Mergesort(A):
# 1. return A if n == 1
# 2. left = left half of A
# 3. right = right half of A
# 4. sorted_left = Mergesort(left)
# 5. sorted_right = Mergesort(right)
# 6. return merge(sorted_left, sorted_right)
